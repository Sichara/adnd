import { Observable } from 'rxjs/Observable';
import { StHttpService } from './st-http.service';

export function main() {
    /* tslint:disable:no-empty */
    xdescribe('StHttpService', () => {
        let sut: any;
        let httpMock: any;
        let preloaderMock: any;
        let blockScreenMock: any;
        let notificationsMock: any;
        let mockServerResponse: any;
        const urlMock = 'url to request';
        const urlAPI = 'api/';
        const mockResponse = Symbol('some response');
        const contentType = 'content-type';

        beforeEach(() => {
            httpMock = jasmine.createSpyObj('httpMock', ['get', 'post', 'put', 'delete']);
            preloaderMock = jasmine.createSpyObj('preloaderMock', ['showLoading']);
            blockScreenMock = jasmine.createSpyObj('blockScreenMock', ['showBlockScreen', 'hideBlockScreen']);
            notificationsMock = jasmine.createSpyObj('notificationsMock', ['error']);

            mockServerResponse = jasmine.createSpyObj('mockServerResponse', ['json', 'text']);
            mockServerResponse.headers = jasmine.createSpyObj('headers', ['get']);

            sut = new StHttpService(httpMock, null, null, null);
            sut.API = urlAPI;
        });

        describe('http methods', () => {
            beforeEach(() => {
                spyOn(sut, 'getRequestOptions');
                spyOn(sut, 'convertResponse');
                httpMock.put.and.returnValue(Observable.of(mockResponse));
                httpMock.post.and.returnValue(Observable.of(mockResponse));
                httpMock.delete.and.returnValue(Observable.of(mockResponse));
            });

            describe('#get', () => {
                //TODO: add tests for cache
                const getRequestOptions = Symbol('get request options');
                const params = {
                    search: {}
                };

                beforeEach(() => {
                    httpMock.get.and.returnValue(Observable.of(mockResponse));
                    sut.getRequestOptions.and.returnValue(getRequestOptions);
                    sut.get(urlMock, params).subscribe(() => {});
                });

                it('should get proper request options', () => {
                    expect(sut.getRequestOptions).toHaveBeenCalledWith(params);
                });

                it('should get data from server', () => {
                    expect(httpMock.get).toHaveBeenCalledWith(urlAPI + urlMock, getRequestOptions);
                });

                it('should get data from server response', () => {
                    expect(sut.convertResponse).toHaveBeenCalledWith(mockResponse, jasmine.any(Number));
                });
            });

            describe('#post', () => {
                const postRequestOptions = Symbol('get request options');
                const requestBody = Symbol('data to send');

                beforeEach(() => {
                    httpMock.post.and.returnValue(Observable.of(mockResponse));
                    sut.getRequestOptions.and.returnValue(postRequestOptions);
                    sut.post(urlMock, requestBody, true, postRequestOptions).subscribe(() => {
                    });
                });

                it('should get proper request options', () => {
                    expect(sut.getRequestOptions).toHaveBeenCalledWith(postRequestOptions);
                });

                it('should post data to server', () => {
                    expect(httpMock.post).toHaveBeenCalledWith(urlAPI + urlMock, requestBody, postRequestOptions);
                });

                xit('should get data from server response', () => {
                    expect(sut.convertResponse).toHaveBeenCalledWith(mockResponse, jasmine.any(Number));
                });
            });

            describe('#put', () => {
                const putRequestOptions = Symbol('get request options');
                const requestBody = Symbol('data to send');

                beforeEach(() => {
                    httpMock.put.and.returnValue(Observable.of(mockResponse));
                    sut.getRequestOptions.and.returnValue(putRequestOptions);
                    sut.put(urlMock, requestBody, putRequestOptions).subscribe(() => {
                    });
                });

                it('should get proper request options', () => {
                    expect(sut.getRequestOptions).toHaveBeenCalledWith(putRequestOptions);
                });

                it('should post data to server', () => {
                    expect(httpMock.put).toHaveBeenCalledWith(urlAPI + urlMock, requestBody, putRequestOptions);
                });

                xit('should get data from server response', () => {
                    expect(sut.convertResponse).toHaveBeenCalledWith(mockResponse, jasmine.any(Number));
                });
            });

            describe('#delete', () => {
                const deleteRequestOptions = Symbol('delete request options');

                beforeEach(() => {
                    httpMock.get.and.returnValue(Observable.of(mockResponse));
                    sut.getRequestOptions.and.returnValue(deleteRequestOptions);
                    sut.delete(urlMock, deleteRequestOptions).subscribe(() => {
                    });
                });

                it('should get proper request options', () => {
                    expect(sut.getRequestOptions).toHaveBeenCalledWith(deleteRequestOptions);
                });

                it('should delete item', () => {
                    expect(httpMock.delete).toHaveBeenCalledWith(urlAPI + urlMock, deleteRequestOptions);
                });

                xit('should get data from server response', () => {
                    expect(sut.convertResponse).toHaveBeenCalledWith(mockResponse, jasmine.any(Number));
                });
            });
        });

        describe('response transformer', () => {
            const convertedResponse = Symbol('converted server response');
            const textResponse = Symbol('text server response');
            let responseType;

            beforeEach(() => {
                mockServerResponse.json.and.returnValue(convertedResponse);
                mockServerResponse.text.and.returnValue(textResponse);
            });

            it('should extract data from response when content-type is json', () => {
                responseType = 'json';
                mockServerResponse.headers.get.and.returnValue(responseType);

                expect(sut.convertResponse(mockServerResponse)).toEqual(convertedResponse);
            });

            it('should extract text from response when content-type is text', () => {
                responseType = 'text';
                mockServerResponse.headers.get.and.returnValue(responseType);

                expect(sut.convertResponse(mockServerResponse)).toEqual(textResponse);
            });
        });

        describe('setting request options', () => {
            let finalOptions: any;
            const initialRequestOptions = Symbol('initial request options');
            const resultRequestOptions = Symbol('result request options');

            beforeEach(() => {
                spyOn(Object, 'assign').and.returnValue(resultRequestOptions);
                finalOptions = sut.getRequestOptions(initialRequestOptions);
            });

            it('should assign request options to existing config', () => {
                expect(Object.assign).toHaveBeenCalledWith({}, {
                    headers: jasmine.anything(),
                    search: jasmine.anything(),
                }, initialRequestOptions);
            });

            it('should construct final request options', () => {
                expect(finalOptions).toEqual(resultRequestOptions);
            });
        });
    });
}
