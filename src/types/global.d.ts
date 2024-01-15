// 声明全局变量
declare module '*.css';
declare module '*.less' {
  const content: any;
  export default content;
}
declare module '*.scss' {
  const content: any;
  export default content;
}
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.json';

// window扩展
interface Window {
  ekd: {
    version?: string
    [key: string]: any
  }
}
