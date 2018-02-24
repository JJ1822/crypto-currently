var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

class ToneAnalysis {

     constructor() {
       const params = {
         username: "483e3b1c-3bc9-4c02-8efd-68901ac76083",
         password: "gcksLub2bNzs",
         version_date: '2017-02-27'
       }
      this.Analyzer = new ToneAnalyzerV3(params);
     }

     ToneAnalyser(input, callback) {
       return this.Analyzer.tone(input, callback)
     }
}


module.exports = ToneAnalysis;
