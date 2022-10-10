// tslint:disable
/**
 * iQueue
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { InlineObject3 } from '../models';
// @ts-ignore
import { InlineObject4 } from '../models';
// @ts-ignore
import { InlineResponse2003 } from '../models';
// @ts-ignore
import { InlineResponse2011 } from '../models';
// @ts-ignore
import { InlineResponse401 } from '../models';
// @ts-ignore
import { InlineResponse409 } from '../models';
// @ts-ignore
import { Store } from '../models';
/**
 * StoreApi - axios parameter creator
 * @export
 */
export const StoreApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Store
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesDelete: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling storesDelete.');
            }
            const localVarPath = `/stores`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Stores
         * @param {number} [userId] 
         * @param {number} [storeId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesGet: async (userId?: number, storeId?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/stores`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (storeId !== undefined) {
                localVarQueryParameter['storeId'] = storeId;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Store Detail
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesIdGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling storesIdGet.');
            }
            const localVarPath = `/stores/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create Store
         * @param {InlineObject4} [inlineObject4] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesPost: async (inlineObject4?: InlineObject4, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/stores`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof inlineObject4 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(inlineObject4 !== undefined ? inlineObject4 : {}) : (inlineObject4 || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Store Info
         * @param {InlineObject3} [inlineObject3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesPut: async (inlineObject3?: InlineObject3, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/stores`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof inlineObject3 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(inlineObject3 !== undefined ? inlineObject3 : {}) : (inlineObject3 || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Start Service
         * @param {number} [storeId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesStartServicePost: async (storeId?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/stores/startService`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (storeId !== undefined) {
                localVarQueryParameter['storeId'] = storeId;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Stop Service
         * @param {number} [storeId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesStopServicePost: async (storeId?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/stores/stopService`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (storeId !== undefined) {
                localVarQueryParameter['storeId'] = storeId;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StoreApi - functional programming interface
 * @export
 */
export const StoreApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Store
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storesDelete(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await StoreApiAxiosParamCreator(configuration).storesDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Stores
         * @param {number} [userId] 
         * @param {number} [storeId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storesGet(userId?: number, storeId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Store>>> {
            const localVarAxiosArgs = await StoreApiAxiosParamCreator(configuration).storesGet(userId, storeId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Store Detail
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storesIdGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Store>> {
            const localVarAxiosArgs = await StoreApiAxiosParamCreator(configuration).storesIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create Store
         * @param {InlineObject4} [inlineObject4] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storesPost(inlineObject4?: InlineObject4, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2011>> {
            const localVarAxiosArgs = await StoreApiAxiosParamCreator(configuration).storesPost(inlineObject4, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update Store Info
         * @param {InlineObject3} [inlineObject3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storesPut(inlineObject3?: InlineObject3, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>> {
            const localVarAxiosArgs = await StoreApiAxiosParamCreator(configuration).storesPut(inlineObject3, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Start Service
         * @param {number} [storeId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storesStartServicePost(storeId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await StoreApiAxiosParamCreator(configuration).storesStartServicePost(storeId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Stop Service
         * @param {number} [storeId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storesStopServicePost(storeId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await StoreApiAxiosParamCreator(configuration).storesStopServicePost(storeId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StoreApi - factory interface
 * @export
 */
export const StoreApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Delete Store
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesDelete(id: number, options?: any): AxiosPromise<object> {
            return StoreApiFp(configuration).storesDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Stores
         * @param {number} [userId] 
         * @param {number} [storeId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesGet(userId?: number, storeId?: number, options?: any): AxiosPromise<Array<Store>> {
            return StoreApiFp(configuration).storesGet(userId, storeId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Store Detail
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesIdGet(id: number, options?: any): AxiosPromise<Store> {
            return StoreApiFp(configuration).storesIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Store
         * @param {InlineObject4} [inlineObject4] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesPost(inlineObject4?: InlineObject4, options?: any): AxiosPromise<InlineResponse2011> {
            return StoreApiFp(configuration).storesPost(inlineObject4, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Store Info
         * @param {InlineObject3} [inlineObject3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesPut(inlineObject3?: InlineObject3, options?: any): AxiosPromise<InlineResponse2003> {
            return StoreApiFp(configuration).storesPut(inlineObject3, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Start Service
         * @param {number} [storeId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesStartServicePost(storeId?: number, options?: any): AxiosPromise<object> {
            return StoreApiFp(configuration).storesStartServicePost(storeId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Stop Service
         * @param {number} [storeId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storesStopServicePost(storeId?: number, options?: any): AxiosPromise<object> {
            return StoreApiFp(configuration).storesStopServicePost(storeId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StoreApi - object-oriented interface
 * @export
 * @class StoreApi
 * @extends {BaseAPI}
 */
export class StoreApi extends BaseAPI {
    /**
     * 
     * @summary Delete Store
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApi
     */
    public storesDelete(id: number, options?: any) {
        return StoreApiFp(this.configuration).storesDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Stores
     * @param {number} [userId] 
     * @param {number} [storeId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApi
     */
    public storesGet(userId?: number, storeId?: number, options?: any) {
        return StoreApiFp(this.configuration).storesGet(userId, storeId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Store Detail
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApi
     */
    public storesIdGet(id: number, options?: any) {
        return StoreApiFp(this.configuration).storesIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Store
     * @param {InlineObject4} [inlineObject4] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApi
     */
    public storesPost(inlineObject4?: InlineObject4, options?: any) {
        return StoreApiFp(this.configuration).storesPost(inlineObject4, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Store Info
     * @param {InlineObject3} [inlineObject3] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApi
     */
    public storesPut(inlineObject3?: InlineObject3, options?: any) {
        return StoreApiFp(this.configuration).storesPut(inlineObject3, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Start Service
     * @param {number} [storeId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApi
     */
    public storesStartServicePost(storeId?: number, options?: any) {
        return StoreApiFp(this.configuration).storesStartServicePost(storeId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Stop Service
     * @param {number} [storeId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApi
     */
    public storesStopServicePost(storeId?: number, options?: any) {
        return StoreApiFp(this.configuration).storesStopServicePost(storeId, options).then((request) => request(this.axios, this.basePath));
    }

}
