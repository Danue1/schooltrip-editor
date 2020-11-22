import JSZip from "jszip";

export class Zip {
  static of(zip: JSZip) {
    return new Zip(zip);
  }

  static async unzipFromArrayBuffer(arrayBuffer: ArrayBuffer): Promise<null | Zip> {
    const zip = await JSZip.loadAsync(arrayBuffer);
    return new Zip(zip);
  }

  private constructor(private readonly zip: JSZip) {}

  file(path: string): null | File {
    const file = this.zip.file(path);
    return file && File.of(file);
  }

  directory(path: string): null | Zip {
    const directory = this.zip.folder(path);
    return directory && Zip.of(directory);
  }
}

export class File {
  static of(file: JSZip.JSZipObject) {
    return new File(file);
  }

  private constructor(private readonly file: JSZip.JSZipObject) {}

  async text(): Promise<string> {
    return this.file.async("text");
  }

  async json<R extends Record<string, any>>(): Promise<R> {
    const text = await this.text();
    return JSON.parse(text);
  }
}
