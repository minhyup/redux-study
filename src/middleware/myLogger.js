const myLogger = (store) => (next) => (action) => {
  console.log('여기는 미들웨어 myLogger:::', action);
  console.log('\t next 전', store.getState());
  const result = next(action);

  // 액션이 리듀서에서 처리가 모두 된 직후의 상태
  console.log('\t next 후', store.getState());

  // dispatch의 결과물
  return result;
};

export default myLogger;
