import { Injectable } from '@angular/core';

@Injectable()
export class FileService {
  fileList: any[] = [];

  get filesname(): string[] {
    const filesname: string[] = [];

    this.fileList.forEach(file => {
      filesname.push(file.name);
    });
    return filesname;
  }

  // Add every file into this.fileList
  addFileList(fileList: FileList): void {
    for (let i = 0; i < fileList.length; i++) {
      this.fileList = this.filterFileName(fileList.item(i).name);
      this.fileList.push(fileList.item(i));
    }
  }

  deleteFileName(name: string): void {
    this.fileList = this.filterFileName(name);
  }

  filterFileName(name: string): any[] {
    return this.fileList.filter(file => {
      if (file.name === name) {
        return false;
      }
      return true;
    });
  }
}
