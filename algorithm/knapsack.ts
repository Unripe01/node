	// n個の品物があり、i番目の品物のそれぞれ重さと価値が weight[i],value[i]となっている (i=0,1,...,n−1)。
// これらの品物から重さの総和がWを超えないように選んだときの、価値の総和の最大値を求めよ。
// ※実装言語はお任せします。
// ※テストコードも実装してください。
// ※開発にかかった所要時間も提出してください。
// [制約]
// ・1 < n <= 100
// ・weight[i],value[i]は整数
// ・1 <= weight[i],value[i] <= 1000
// ・1 <= W <= 10000
// ====================
export const knapsack = (weights: number[], values: number[], W: number) => {
  //DP作成
  const dp: number[][] = [];
  //一つも選んでない状態も作るので weight.length + 1
  for (let index = 0; index < weights.length + 1; index++) {
    dp[index] = new Array(W + 1).fill(0);
  }
  console.table(dp)
  //重さの総和がWを超えないようにi+1番目(<= 品物の量)までの品物を選んでいった時の最大価値を更新。
  //dpに代入する時 ループindex + 1 することで 0 個選ぶを無視しつつ、一つ前の重さをみている
  for (let putItem = 0; putItem < weights.length; putItem++) {
    for (let nowWeight = 0; nowWeight <= W; nowWeight++) {
      //itemを入れたほうが価値が高くなる時
      if ( nowWeight >= weights[putItem] ) {
          dp[putItem + 1][nowWeight] = Math.max(values[putItem] + dp[putItem][nowWeight - weights[putItem]], dp[putItem][nowWeight])
      } else {
          //入らないときは上の計算結果をそのまま下にずらす
          dp[putItem + 1][nowWeight] = dp[putItem][nowWeight]
      }
      console.table(dp)
    }
  }
  return dp[weights.length][W];
};
// const weight = [2, 5, 10];
// const value = [10, 30, 20];
// console.log(knapsack(weight, value, 15));