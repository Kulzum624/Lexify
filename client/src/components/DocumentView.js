import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function DisplayDoc() {
  const navigate=useNavigate();
  let {uri,to}=useParams();
  uri =decodeURIComponent(uri);
  console.log(uri);
    const docs = [
    {
      uri:uri,
    },
  ];

  return (
    // <div style={{ height: "100vh" }} >
    //    {to&&<button onClick={()=>{navigate(to)}} >
    //         Edit Document
    //     </button>
    //     }
    //   <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    // </div>

 <div className="">

      <div className="mr-6 mt-6 flex items-center justify-end gap-x-6 ">

        <button className="rounded-md  bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => { navigate(to) }} >
          Edit Document
        </button>
      </div>
      <div style={{ height: "100vh" }}>
        <DocViewer  documents={docs} pluginRenderers={DocViewerRenderers} />
      </div>
    </div>



  );
}

export default DisplayDoc;