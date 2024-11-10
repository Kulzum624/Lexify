import React from "react";
import "../App.css"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function DisplayResultDoc() {
  const navigate=useNavigate();
  let {uri,to}=useParams();
  uri =decodeURIComponent(uri);
  console.log(uri);
  const handleDownloadClick = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = uri;
    downloadLink.download = 'rand.docx';
    downloadLink.click();
  };

  return (
    <div>
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Document Viewer</h1>
        <button
          onClick={handleDownloadClick}
        >
          Download Document
        </button>
      </header>
      <div style={{height:"100vh"}} >
        <DocViewer documents={[{ uri: uri }]} pluginRenderers={DocViewerRenderers} />
      </div>
    </div>
  );
}

export default DisplayResultDoc;