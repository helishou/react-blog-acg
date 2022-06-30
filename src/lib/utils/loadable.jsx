// // 直接贴一下我的代码，引入了antd，使用React.lazy加载组件
// import React from 'react';
// import { Spin } from 'antd';
// // 这里的路径用了./*/*就是加载所有当前文件平级的文件夹下的所有文件
// const modules = import.meta.glob('../pages/*/*/*');
// console.log(modules);
// const LoadPage: React.FC<appProps> = ({ data }) => {
//   const Home = '/index.tsx';
//   const URL = data ? (data.URL ? data.URL : Home) : Home;
//   // 使用data.URL拼接url去匹配modules里面的key，得到对应的value就是异步加载组件的函数
//   const Compontents = React.lazy(modules[`.${URL}`] as any);
//   return (
//     <React.Suspense fallback={(
//       <div style={{
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//       >
//         <Spin size="large" />
//       </div>
// )}
//     >
//       <Compontents />
//     </React.Suspense>
//   );
// };
// // 需要使用加载异步组件的地方，直接引入此组件使用，然后根据自己的文件夹路径修改import.meta.glob里的路径
// export default LoadPage;
// interface appProps {
//     data: CD
// }
// interface CD {
//     CDID: string
//     CDMC: string
//     ID: string
//     URL: string
//     child: [CD] | null
// }
