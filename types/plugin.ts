export interface LangOpt {
  mode: string;
  src: string;
  dst: string;
  movePath?: string;
  name: string;
}
export interface LogConf {
  level?: number;
  filters?: string[];
  maxLen?: number;
}
export interface LangspackOpt {
  lang: LangOpt;
  log?: LogConf;
  mode?: string;
}

export interface JsonFile {
  path: string;
  data: object;
}

export interface LoadOpt {
  dir: string;
  include?: RegExp | ((_filename: string) => boolean);
  exclude?: RegExp | ((_filename: string) => boolean);
}

export interface MatchOpt {
  file: string;
  include?: RegExp | ((_filename: string) => boolean);
  exclude?: RegExp | ((_filename: string) => boolean);
}
