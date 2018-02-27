var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

class ToneAnalysis {

      constructor() {
        const params = require('../../twitter-geo-server-js-master/twitter-credentials');
        this.Analyzer = new ToneAnalyzerV3(params.watsonTone);
      }

      ToneAnalyser(input, callback) {
        return this.Analyzer.tone(input, callback)
      }
}


module.exports = ToneAnalysis;
