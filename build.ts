const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Define the source and destination folders
const sourceFolder = './pages/source';
const destinationFolder = './pages/docs';

// Define the file extensions to process
const fileExtensions = ['.md', '.mdx'];

// Function to delete a folder
function deleteFolder(folder) {
    execSync(`rm -rf ${folder}`);
}

// Function to copy a folder to a new location
function copyFolder(source, destination) {
    deleteFolder(destination);
    execSync(`cp -R ${source} ${destination}`);
}

// Function to generate the _meta.json file for a folder
function generateMetaFile(folderPath) {
    // Get the names of the Markdown files within the folder
    const files = fs.readdirSync(folderPath);
    const mdFiles = files.filter(file => fileExtensions.includes(path.extname(file)));

    if (mdFiles.length > 0) {
        const meta = {};

        mdFiles.forEach(mdFile => {
            const originalName = path.basename(mdFile, path.extname(mdFile));
            const revisedName = originalName.replace(/ /g, '-');

            meta[revisedName] = originalName;
        });

        // Write the _meta.json file
        const metaFilePath = path.join(folderPath, '_meta.json');
        fs.writeFileSync(metaFilePath, JSON.stringify(meta, null, 2));

        console.log(`Generated _meta.json for folder: ${folderPath}`);
    } else {
        console.log(`No Markdown files found in folder: ${folderPath}`);
    }
}

// Function to recursively process folders
function processFolders(dir) {
    const folders = fs.readdirSync(dir, { withFileTypes: true });

    folders.forEach(folder => {
        const folderPath = path.join(dir, folder.name);

        if (folder.isDirectory()) {
            generateMetaFile(folderPath);
            processFolders(folderPath);
        }
    });
}

// Function to rename the MD files by replacing spaces with hyphens
function renameMdFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach(file => {
        const filePath = path.join(dir, file.name);

        if (file.isDirectory()) {
            renameMdFiles(filePath);
        } else if (file.isFile() && fileExtensions.includes(path.extname(file.name))) {
            const newFileName = file.name.replace(/ /g, '-');
            const newFilePath = path.join(dir, newFileName);

            fs.renameSync(filePath, newFilePath);
            console.log(`Renamed file: ${filePath} to ${newFilePath}`);
        }
    });
}

// Copy the source folder to the destination folder
copyFolder(sourceFolder, destinationFolder);

// Generate _meta.json files for folders with MD files in the destination folder
processFolders(destinationFolder);

// Rename MD files in the destination folder by replacing spaces with hyphens
renameMdFiles(destinationFolder);