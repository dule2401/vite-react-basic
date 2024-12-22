// import { useEffect, useRef, useState } from 'react';
// import { fetchQuery } from 'react-relay';
// import { OperationType } from 'relay-runtime';

// const useCallBackRef = (cb: any) => {
//   const ref = useRef<typeof cb>(cb);
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   ref.current = cb;
//   return ref;
// };

// export function useRelayFetchQuery<T extends OperationType>({
//   fetchQueryParams: [environment, taggedNode, variables, cacheConfig],
//   onCompleted,
//   onError,
//   skip,
// }: {
//   fetchQueryParams: Parameters<typeof fetchQuery>;
//   onCompleted?(res: T['response']): void;
//   onError?(e: Error): void;
//   skip?: boolean;
// }) {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState<T['response']>();

//   const onCompletedCbRef = useCallBackRef(onCompleted);
//   const onErrorCbRef = useCallBackRef(onError);

//   useEffect(
//     function process() {
//       if (skip) return;
//       setLoading(true);
//       fetchQuery<T>(environment, taggedNode, variables, cacheConfig)
//         .toPromise()
//         .then((res) => {
//           setData(res);
//           onCompletedCbRef.current?.(res);
//         })
//         .catch(onErrorCbRef.current)
//         .finally(() => {
//           setLoading(false);
//         });
//     },
//     [onCompletedCbRef, onErrorCbRef, environment, taggedNode, variables, cacheConfig, skip],
//   );

//   return { loading, data };
// }


// config api graphql on react-relay
export const useRelayFetchQuery = () => {};
