
import { LocalStorage } from './WebStorage';

export class LocalCache {

	timeoutValue: number = 30; // Seconds

	@LocalStorage() public cacheStore: any = {
		'data': []
	};

	constructor() { };

	clear(objectName?: string, id?: string) {
		let tempID = '';
		if (typeof objectName === undefined && typeof id === undefined) {
			this.cacheStore.data = {};
			return;
		}
		if (typeof id !== undefined) {
			tempID = id;
		}
		const key: string = objectName + tempID;
		const exIndex = this.arrayObjectIndexOf(this.cacheStore.data, key, 'object');
		if (exIndex > -1) {
			this.cacheStore.data.splice(exIndex, 1);
		}
	}

	set(objectName: string, values: any, id = '') {
		const key: string = objectName + id;
		const exIndex = this.arrayObjectIndexOf(this.cacheStore.data, key, 'object');
		let newObject = {
			'object': key,
			'value': values,
			'timestamp': Date.now()
		};
		if (exIndex > -1) {
			this.cacheStore.data.splice(exIndex, 1);
		}
		this.cacheStore.data.push(newObject);
	}

	get(objectName: string, id = ''): Promise<any> {
		let dataPromise = new Promise((resolve, reject) => {
			// Try to find item inside list of items first
			if (id !== "") {
				const objIndex = this.arrayObjectIndexOf(this.cacheStore.data, objectName, 'object');
				const obj = this.cacheStore.data[objIndex].value
				for (let i = 0; i < obj.length; i++) {
					if (obj[i]['id'] === id) {
						resolve(obj[i]);
					}
				};
			}
			const exIndex = this.arrayObjectIndexOf(this.cacheStore.data, objectName + id, 'object');
			const item = this.cacheStore.data[exIndex];
			if (exIndex === -1) {
				reject(new Error('notfound'));
			} else if (Date.now() - item.timestamp > this.timeoutValue * 1000) {
				this.cacheStore.data.splice(exIndex, 1);
				reject(new Error('timeout'));
			}
			resolve(item.value);
		}
		);
		return dataPromise;
	}

	private arrayObjectIndexOf(myArray: Object[], searchTerm: string, property: string): number {
		for (let i = 0, len = myArray.length; i < len; i++) {
			if (myArray[i][property] === searchTerm) {
				return i;
			}
		}
		return -1;
	}

}
