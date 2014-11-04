function createDoc() {
  var date = new Date();
  date = date - (1000 * 60 * 60 * 24 * 3)
  var debug_date = Utilities.formatDate(new Date(date), "NZDT", "dd-MM-YYYY");
  var doc = DocumentApp.create('Automation Weekly Update - ' + Utilities.formatDate(new Date(date), "NZDT", "dd-MM-YYYY") );
  var body = doc.getBody();
  var rowsData = [['xx'], ['yy']];
  body.insertParagraph(0, doc.getName())
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  table = body.appendTable(rowsData);
}
