export class reviewModel {
    constructor(public reviewerImage: string, 
        public reviewerName: string,
        public reviewTitle: string, 
        public reviewDate: string,
        public reviewRating: number,
        public reviewDesc: string) {}
}