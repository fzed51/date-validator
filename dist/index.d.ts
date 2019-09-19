export interface iDateTestable {
    day?: number;
    month?: number;
    year?: number;
}
export declare const dateValidator: ({ day, month, year }: iDateTestable) => boolean;
