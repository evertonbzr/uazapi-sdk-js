import { Config } from "./models/config";
import {
  InstanceResolver,
  InstanceResolverType,
} from "./resolvers/instance/resolver";
import axios, { AxiosInstance } from "axios";

export class Uazapi {
  private config: Config;
  private axiosInstance: AxiosInstance;
  public instances: InstanceResolverType;

  constructor(config?: Partial<Config>) {
    this.config = this.loadConfig(config || {});

    this.axiosInstance = axios.create({
      baseURL: this.config.serverUrl,
      headers: {
        apikey: this.config.apiKey,
      },
    });

    this.instances = new InstanceResolver(this.axiosInstance);
  }

  private loadConfig({
    apiKey = undefined,
    serverUrl = undefined,
  }: Partial<Config>): Config {
    const apiKeyFound = process.env.UAZAPI_API_KEY || apiKey;
    const serverUrlFound = process.env.UAZAPI_SERVER_URL || serverUrl;

    if (!apiKeyFound) {
      throw new Error("API key is missing");
    }
    if (!serverUrlFound) {
      throw new Error("Server URL is missing");
    }

    return { apiKey: apiKeyFound, serverUrl: serverUrlFound };
  }
}
