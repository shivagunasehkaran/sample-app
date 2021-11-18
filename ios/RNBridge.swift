//
//  RNBridge.swift
//  SampleApp
//
//  Created by Shiva on 18/11/21.
//

import Foundation

@objc
public class RNBridge : NSObject {
  @objc public var reactNativeCallback: RCTResponseSenderBlock? = nil
 
  @objc func passValueToRN() {
   
    DispatchQueue.main.sync
    {
      let resultsDict = [
        "result" : "Success",
        "value": "Message from Native iOS"
        ] as [String : Any];
     
      reactNativeCallback!([NSNull() ,resultsDict]);
    }
  }
}
