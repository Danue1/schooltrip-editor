export class FileReader {
  static of(fileList: FileList) {
    return new FileReader(fileList);
  }

  private constructor(private readonly fileList: FileList) {}

  async readAsArrayBuffer(index: number): Promise<null | ArrayBuffer> {
    const file = this.fileList[index];
    if (!file) {
      return null;
    }

    return new Promise<ArrayBuffer>(resolve => {
      const reader = new window.FileReader();
      reader.onload = async () => {
        const arrayBuffer = await file.arrayBuffer();
        resolve(arrayBuffer);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  async readAsString(index: number): Promise<null | string> {
    const file = this.fileList[index];
    if (!file) {
      return null;
    }

    return new Promise<string>(resolve => {
      const reader = new window.FileReader();
      reader.onload = async () => {
        const text = await file.text();
        resolve(text);
      };
      reader.readAsText(file);
    });
  }
}
