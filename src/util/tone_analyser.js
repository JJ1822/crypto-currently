var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

class ToneAnalysis {

      constructor() {
        const params = {
          username: "xx",
          password: "xx",
          version_date: '2017-02-27'
        }
       this.Analyzer = new ToneAnalyzerV3(params);
      }

      ToneAnalyser(input, callback) {
        return this.Analyzer.tone(input, callback)
      }
}


module.exports = ToneAnalysis;
