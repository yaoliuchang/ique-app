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


import { SeatType } from './seat-type';

/**
 * 
 * @export
 * @interface InlineObject5
 */
export interface InlineObject5 {
    /**
     * 
     * @type {number}
     * @memberof InlineObject5
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof InlineObject5
     */
    storeId: number;
    /**
     * 
     * @type {number}
     * @memberof InlineObject5
     */
    customerId: number;
    /**
     * 
     * @type {SeatType}
     * @memberof InlineObject5
     */
    seatType: SeatType;
    /**
     * 
     * @type {number}
     * @memberof InlineObject5
     */
    queueNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineObject5
     */
    queueId: number;
    /**
     * 
     * @type {number}
     * @memberof InlineObject5
     */
    startTime: number;
    /**
     * 
     * @type {number}
     * @memberof InlineObject5
     */
    endTime: number;
    /**
     * 
     * @type {string}
     * @memberof InlineObject5
     */
    status: InlineObject5StatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum InlineObject5StatusEnum {
    Pending = 'pending',
    Seated = 'seated',
    Skipped = 'skipped'
}



