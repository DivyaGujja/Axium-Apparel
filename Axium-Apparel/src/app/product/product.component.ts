import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/app/shared/product.model';
import { reviewModel } from 'src/app/shared/review.model';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[NgbRatingConfig]
})
export class ProductComponent implements OnInit {

  writeReview: boolean = false;
  productDesc: string[] = ['300 GRAMS OF PRIMALOFT<sup>&reg;</sup> ONE INSULATION','SCHOELLER<sup>&reg;</sup> MICROFIBER SHELL','DIAGONAL QUILTING',
  'MICROFIBER RIPSTOP LINER','ZIPPER GARAGE AT COLLAR','ANCHORED BOTTOM-HEM ADJUSTERS','3-IN-1 FRONT POCKETS',
'ZIPPERED CHEST POCKET','TWO INTERIOR ZIPPERED POCKETS','MADE IN THE PHILIPPINES'];
  productDescDetail: string[] = [`Our most insulated jacket to date, the city-styled Highline is designed to keep
  you warm during the deep freeze of winter.`,`With 300 grams of PrimaLoft ONE
  insulation, the Highline offers incredible heat retention while remaining form fitting
  and low volume-essentially all the warmth of a puffer jacket without all the
  puff. Its outer shell is made from a water-resistant Schoeller microfber
  fabric that has been diagonally quilted,
  while its inside liner is made from a
  silky-soft microfiber ripstop nylon.`,`The Highline features a zipper garage to
  prevent a cold metal zipper from pressing
  against your neck, non-quilted side
  panels and underarms for a sleeker fit
  and anchored bottom-hem adjusters for a
  snug fit. It has twO uniquely designed
  3-in-1 front pockets, which include a
  top-zippered entrance, a drop pocket
  with donut snap, and a side hand-warmer
  Additional storage can be found in its
  exterior chest pocket and two interior
  Zippered pockets.`];
  product: productModel = new productModel('/assets/images/tough-mojo-jacket-img1.png', 
                                           `Tough Mojo Jacket<sup>&reg;</sup></p>`, 
                                           this.productDesc,
                                           '/assets/images/tough-mojo-jacket-img2.png',
                                           this.productDescDetail);
  reviews: reviewModel[] = [new reviewModel('/assets/images/reviewer1.png',
                                           'Shaun White',
                                           'This Thing is a monster!',
                                           '08/20/2013',
                                           4,
                                           `I picked up this jacket for use in San Francisco and the surrounding Bay Area (Lake Tahoe included). I use this jacket for
                                           everything. It is often cloudy/drizzly/cold in SF and this jacket deals with it all I have not tried in heavy rain, but in drizzly
                                           conditions, the DWR treatment definitely makes small drops bead right off. It also has a nice fleece-like iner inside and
                                           keeps me really warm down to 40 degrees or so. In Tahoe. I have used this with a shirt or base layer, mid later fleece, and
                                           then this jacket. I don' get clod too easily but in temps 20's-30'sl felt great (with some gloves and a beanie of course). I
                                           have not tried it sking yet because I snowboard and to be honest it wouldnt be quite large enough Uke baggler
                                           snowboard clothing). But I have seen people who wear softshells skiing all the time. Il also use this when l go to work and
                                           want a jacket that dresses up nice. With slacks, nice shoes, and a button up it looks great. I am 6 and about 190 lbs (34 in
                                           arms) and the large fits perfect. The pockets are well designed as well The soft shellis the new do-everything jacket
                                           wind/water resistent but also maleable and comfy for wearing anywhere. I highly recommend this jacket`),
                            new reviewModel('/assets/images/reviewer2.png',
                                            'Jennie Loren',
                                            'Luv it so much I bought 2!',
                                            '01/12/2013',
                                            5,
                                            `Loved this jacket so much from previous yearsI decided to buy a second in a different color. I'm tall and fairly slender and
                                            its tailored silhouette fits me nicely. For perspective Im around 63 -150 Ibs. and a large does the trick. Ill wear this for all of
                                            fall and into the winter. Despite not being bulky or baggy I find it good and warm for anything down to 40 degrees and
                                            perhaps lower if youre keeping up on your layering. For weather at freezing or below you should consider something heavier`)];
  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly=true;
  }

  ngOnInit() {
  }

  onReviewProduct() {
    return this.writeReview = true;
  }

  onCloseReview() {
    this.writeReview = false;
  }

}
