import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LocalCache } from './localstorage/cache';



@Injectable()
export class FirebaseService {
	baseUrl: string = 'https://go-bat.firebaseio.com';
	cacheStore: LocalCache = new LocalCache();

	errorHandler = error => console.error('FirebaseService error: ', error);

	constructor(private http: Http) { }

	list(objectName: string): Promise<any> {
		return this.cacheStore.get(objectName)
			.then(response => response)
			.catch(error => {
				return this.http.get(`${this.baseUrl}/${objectName}.json`)
					.toPromise()
					.then(response => {
						const values = this.convert(response.json());
						this.cacheStore.set(objectName, values);
						return values;
					})
					.catch(this.errorHandler);
			});
	}

	create(objectName: string, record): Promise<any> {
		const json = JSON.stringify(record);
		this.cacheStore.clear(objectName);
		return this.http.post(`${this.baseUrl}/${objectName}.json`, json)
			.toPromise()
			.catch(this.errorHandler);
	}

	edit(objectName: string, record): Promise<any> {
		let cleanObject = {};
		this.cacheStore.clear(objectName);
		for (let propertyName in record) {
			if (propertyName !== 'id') {
				cleanObject[propertyName] = record[propertyName];
			}
		}
		const json = JSON.stringify(cleanObject);
		return this.http.patch(`${this.baseUrl}/${objectName}/${record.id}.json`, json)
			.toPromise()
			.catch(this.errorHandler);
	}

	item(objectName: string, id: string): Promise<any> {
		return this.cacheStore.get(objectName, id)
			.then(response => response)
			.catch(error => {
				return this.http.get(`${this.baseUrl}/${objectName}/${id}.json`)
					.toPromise()
					.then(response => {
						const value = response.json();
						this.cacheStore.set(objectName, value, id);
						return value;
					})
					.catch(this.errorHandler);
			});
	}

	delete(objectName: string, id: string): Promise<any> {
		this.cacheStore.clear(objectName, id);
		return this.http.delete(`${this.baseUrl}/${objectName}/${id}.json`)
			.toPromise()
			.catch(this.errorHandler);
	}

	private convert(parsedResponse) {
		const records = [];
		for (let record in parsedResponse) {
			let combinedRecord = parsedResponse[record];
			combinedRecord.id = record;
			records.push(parsedResponse[record]);
		};
		return records;
	}


}
