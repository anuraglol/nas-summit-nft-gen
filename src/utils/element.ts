// import { client } from "@/lib";
// import axios from "axios";
// import html2canvas from "html2canvas";
// import { MutableRefObject } from "react";

// const elementHelper = async (ref: MutableRefObject<any>, name: string) => {
//   const url = (await html2canvas(ref.current)).toDataURL("image/png");
//   const blob = await fetch(url).then((r) => r.blob());
//   const data = new FormData();
//   data.append("image", blob);
//   const imgBB = await axios.post(
//     "https://api.imgbb.com/1/upload?key=822079d074dfd089764b99744dadefc4",
//     data
//   );
//   const img_url = imgBB.data.data.url;
//   console.log(img_url);

//   const metadata = {
//     name: `Course Finisher: #${name}`,
//     symbol: "",
//     description:
//       "NFT from Solana and Patika for all successful finishers of the Solana Practicum in Turkey.",
//     image: img_url,
//     attributes: [],
//     properties: {
//       files: [],
//       category: "image",
//       creators: [],
//     },
//   };

//   const metadataFile = new File([JSON.stringify(metadata)], "metadata.json", {
//     type: "application/json",
//   });

//   const metadata_cid = await client.put([metadataFile]);
//   const metadata_url = `https://cloudflare-ipfs.com/ipfs/${metadata_cid}/metadata.json`;
//   return metadata_url;
// };

// export { elementHelper };
export {};
