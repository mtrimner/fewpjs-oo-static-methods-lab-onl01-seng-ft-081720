class Formatter {
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence) {
    let exemptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newSentence = []
    let sentenceArray = sentence.split(" ")
    for ( let i = 0; i < sentenceArray.length; i++)
      if (i == 0) {
        newSentence.push(this.capitalize(sentenceArray[i]))
      } else {
        if (exemptWords.includes(sentenceArray[i])) {
          newSentence.push(sentenceArray[i])
        } else {
          newSentence.push(this.capitalize(sentenceArray[i]))
        }
      }
      return newSentence.join(" ")
  }
}