class HttpClient {
  async get<T>(path: string): Promise<T> {
    return this.request("GET", path);
  }

  private async request<T>(method: string, path: string): Promise<T> {
    const response = await fetch("https://gorest.co.in/public/v2" + path, {
      method,
    });

    try {
      return await response.json();
    } catch (error) {
      console.log(error);
      return undefined as T;
    }
  }
}

export const httpClient = new HttpClient();
