import { Config } from "./models/config";
import {
  InstanceResolver,
  InstanceResolverType,
} from "./resolvers/instance/resolver";
import axios, { AxiosInstance } from "axios";

class Uazapi {
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

    this.loadResolvers();
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

  private loadResolvers() {
    this.instances = new InstanceResolver(this.axiosInstance);
  }
}

const uazapi = new Uazapi();

uazapi.instances.list().then((instances) => {
  console.log(instances.map((instance) => instance.instance.owner));
});
