const fs = require('fs');
const args = process.argv;
const cwd = process.cwd();
let [
    componentName,
    componentFolder,
] = [args[2], args[3]];

function generateComponent(template = 'default') {
    const templateDir = `${__dirname}/templates/${template}`;
    const templateFiles = fs.readdirSync(templateDir);
    const dir = cwd + (componentFolder && componentFolder != 'undefined' ? `/${componentFolder}` : '');

    if (!componentName) {
        process.stdout.write(`
Your component must have a name.
        \n`);
        return;
    }

    componentName = componentName
        .replace(/^./, (compFirstLetter) => compFirstLetter.toUpperCase())

    try {
        fs.mkdirSync(`${dir}/${componentName}`)
    } catch (e) {
        if(e.code === 'EEXIST') {
            process.stdout.write(`
A component named ${componentName} already exists!
Try another component name.
            \n`);
        }
    
        if(e.code === 'ENOENT') {
            process.stdout.write(`
Path ${componentFolder} not found at ${cwd}
            \n`);
        }
        
        return;
    }

    templateFiles.forEach(templateFile => {
        const fileName = templateFile.replace(/{{name}}/g, componentName);

        const file = fs.readFileSync(`${templateDir}/${templateFile}`, 'utf8');
        const fileWithComponentName = file.replace(/{{name}}/g, componentName);

        fs.writeFileSync(`${dir}/${componentName}/${fileName}`, fileWithComponentName)
    })
    process.stdout.write('DONE!\n');
}

generateComponent();
