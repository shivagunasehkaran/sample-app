//
//  ActivityStarter.m
//  Svasthiya
//
//  Created by admin on 27/07/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "ActivityStarter.h"
#import <React/RCTLog.h>
#import "ActivityStarter.h"
#import "SampleApp-Swift.h"

@implementation ActivityStarter

  // To export a module named ActivityStarter
  RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(callNativeFunction : (RCTResponseSenderBlock)callback)
  {
    RNBridge* obj = [[RNBridge alloc] init];
    obj.reactNativeCallback = callback;
    [obj passValueToRN];
  }

@end
