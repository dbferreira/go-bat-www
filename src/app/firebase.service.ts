import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FirebaseService {
	baseUrl: string = 'https://go-bat.firebaseio.com/';
	errorHandler = error => console.error('BookmarkService error: ', error);

	constructor(private http: Http) { }

	list(objectName: string) {
		return this.http.get(`${this.baseUrl}/${objectName}.json`)
			.toPromise()
			.then(response => this.convert(response.json()))
			.catch(this.errorHandler);
	}

	create(objectName: string, record) {
		const json = JSON.stringify(record);
		return this.http.post(`${this.baseUrl}/${objectName}.json`, json)
			.toPromise()
			.catch(this.errorHandler);
	}

	edit(objectName: string, record) {
		let cleanObject = {};
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

	item(objectName: string, id: string) {
		return this.http.get(`${this.baseUrl}/${objectName}/${id}.json`)
			.toPromise()
			.then(response => response.json())
			.catch(this.errorHandler);
	}

	delete(objectName: string, id: string) {
		return this.http.delete(`${this.baseUrl}/${objectName}/${id}.json`)
			.toPromise()
			.catch(this.errorHandler);
	}

		private convert(parsedResponse) {
			return parsedResponse;
	//	return Object.keys(parsedResponse);
			/*.map(id => ({
				id: id,
				title: parsedResponse[id].title,
				url: parsedResponse[id].url
			}));*/
			//.sort((a, b) => a.title.localeCompare(b.title));
	}
}
