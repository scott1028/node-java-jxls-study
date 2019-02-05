const java = require('java');

java.classpath.push('./lib/commons-beanutils-1.9.2.jar');
java.classpath.push('./lib/commons-codec-1.10.jar');
java.classpath.push('./lib/commons-collections-3.2.1.jar');
java.classpath.push('./lib/commons-jexl-2.1.1.jar');
java.classpath.push('./lib/commons-logging-1.1.1.jar');
java.classpath.push('./lib/curvesapi-1.03.jar');
java.classpath.push('./lib/jcl-over-slf4j-1.7.12.jar');
java.classpath.push('./lib/jxls-2.4.7.jar');
java.classpath.push('./lib/jxls-poi-1.0.11.jar');
java.classpath.push('./lib/logback-classic-1.1.3.jar');
java.classpath.push('./lib/logback-core-1.1.3.jar');
java.classpath.push('./lib/poi-3.14.jar');
java.classpath.push('./lib/poi-ooxml-3.14.jar');
java.classpath.push('./lib/poi-ooxml-schemas-3.14.jar');
java.classpath.push('./lib/slf4j-api-1.7.12.jar');
java.classpath.push('./lib/stax-api-1.0.1.jar');
java.classpath.push('./lib/xmlbeans-2.6.0.jar');
java.classpath.push('./src');

const JJxlsHelper = java.import('org.jxls.util.JxlsHelper');
const JContext = java.import('org.jxls.common.Context');
const JFileInputStream = java.import('java.io.FileInputStream');
const JFileOutputStream = java.import('java.io.FileOutputStream');
const JInputStream = java.import('java.io.InputStream');
const JOutputStream = java.import('java.io.OutputStream');
const JURL = java.import('java.net.URL');
const JArrayList = java.import('java.util.ArrayList');
const JList = java.import('java.util.List');
const JObject = java.import('java.lang.Object');
const JUser = java.import('com.model.User');
const JLong = java.import('java.lang.Long')
const JFile = java.import('java.io.File')
// console.log(JUser, 11);
// const JWorkbook = java.import('org.apache.poi.ss.usermodel.Workbook');

// const JArrayList = java.import('java.util.ArrayList');
// java.callMethodSync(jarrayList, 'add', 191);
// const result = java.callMethodSync(jarrayList, 'get', 0);
// console.log(result);
// debugger;
// const jarrayList = new JArrayList();

const jusers = new JArrayList();
jusers.addSync(new JUser(new JLong(1), 'scott', '123456'));
jusers.addSync(new JUser(new JLong(2), 'scott', '123456'));
jusers.addSync(new JUser(new JLong(3), 'scott', '123456'));
jusers.addSync(new JUser(new JLong(4), 'scott', '123456'));
jusers.addSync(new JUser(new JLong(5), 'scott', '123456'));
// java.callMethodSync(jusers, 'add', new JUser(new JLong(1), 'scott', '123456'));
// java.callMethodSync(jusers, 'add', new JUser(new JLong(2), 'scott', '123456'));
// java.callMethodSync(jusers, 'add', new JUser(new JLong(3), 'scott', '123456'));
// java.callMethodSync(jusers, 'add', new JUser(new JLong(4), 'scott', '123456'));
// java.callMethodSync(jusers, 'add', new JUser(new JLong(5), 'scott', '123456'));

jinput = new JFileInputStream(new JFile('./templates/user.xlsx'));
joutput = new JFileOutputStream(new JFile('./dist/user.output.xlsx'));
jcontext = new JContext();
jcontext.putVarSync('users', jusers);

JJxlsHelper.getInstanceSync().processTemplateSync(jinput, joutput, jcontext);
