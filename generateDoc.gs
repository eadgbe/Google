function createDoc() {
  var date = new Date();
  date = date - (1000 * 60 * 60 * 24 * 3)
  var debug_date = Utilities.formatDate(new Date(date), "NZDT", "dd-MM-YYYY");
  var doc = DocumentApp.create('Automation Weekly Update - ' + Utilities.formatDate(new Date(date), "NZDT", "dd-MM-YYYY") );
  var body = doc.getBody();
  var rowsData = [['Donald Gordon\n'], ['Gideon Steinberg\n'], ['Layne Small\n'], ['Mariano Flores\n'], ['Piers chamberlain\n'], 
                  ['Siddharth Parekh\n'], ['Tim Nicholas\n'], ['Ben Te Hira\n'], ['Nils Canonge\n']];
  body.insertParagraph(0, doc.getName())
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  table = body.appendTable(rowsData);
  //table.appendTableRow().appendTableCell().appendListItem("test");
  //.editAsText().appendText("\n\u2022");
  moveFile('Automation Weekly Update - ' + debug_date);
  
}



function moveFile( fileName){
  var files = null;
  var fileId = null;
  var name = null;
  files = DocsList.getFilesByType(DocsList.FileType.DOCUMENT);
  for (var i = 0; i < files.length; i++) {
    name = files[i].getName().toString();
    if (name == fileName.toString() ){
      fileId = files[i].getId();
    }
  }
   DocsList.getFileById(fileId).addToFolder(DocsList.getFolder('Weekly Updates'));
}