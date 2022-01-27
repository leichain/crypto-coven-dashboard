export const CONFIG = {
  TEMPLATE: {
    // 1. Set your NFT collection contract address
    "collection_address": "0xdc524e3c6910257744c1f93cf15e9f472b5bd236",

    // 2. Set your blockchain chain ID where your NFT collection contract address is deployed (see below for value options)
    "block_chain_id": "1",

    // 3. Set the default title of your dashboard. If found, this template uses the NFT Collection name for the title.
    "title": "Crypto Coven Dashboard",

    // 4. (Optional) Display the floor price chart
    "timeseries_chart": true,

    // 5. (Optional) Set your banner image
    "banner_picture": "https://lh3.googleusercontent.com/j3FvWe7pmZ58bm-GiaFc5yIQKMgcniZJxFpCCuhYR3vbKJNKDtkDsagQ6WLoazX6M9hvBZhCsJuUmzoJ7UibRgtu2shHS-QN_TYQAQ=w600",
  },

  FILTER_OPTIONS : [
    {name: "Ethereum", value: 1},
    {name: "Polygon", value: 137},
    {name: "Avalanche", value: 43114}
    ],
  GRAPH_OPTIONS : [
    {name: "7 Days", value: 7},
    {name: "1 Month", value: 30},
    {name: "3 Month", value: 90},
    {name: "1 Year", value: 365},
      {name: "All time", value: 0},
    ],
}