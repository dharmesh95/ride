export class NeedRide {

    srcLat: string;
    srcLong: string;
    noOfSeats: number;

    constructor(srcLat: string, srcLong: string, noOfSeats: number) {
        this.srcLat = srcLat;
        this.srcLong = srcLong;
        this.noOfSeats = noOfSeats;
    }

}