// Changes on 21.04.20:
// Make vertical gradient background: 
  //ok. See styles.css
// Make nodes same color: 
  //ok. Done in groups. Can't be done in nodes 
// Make edges direct: 
  //edges.smooth.type: "continuous"
// Increase padding: 
  //nodes.margin: 50
  //nodes.font.size: 100
// Increase distance between levels: 
  //layout.levelSeparation: 2000

// Highlight only incoming edges:
  // can't separate in options.interaction
// Enlarge nodes on click
  //
// Make edges less visible, more transparent
  //
// Make nodes less visible, when clicking on one
  //


import React from 'react'
import Graph from "react-graph-vis";
import data from './courses'

// import data from courses.json file
let nodes = data.nodes
nodes.forEach( node => {
  node.label = node.name
  node.level = node.group
})
let edges = data.links
edges.forEach( link => {
  link.from = link.source
  link.to = link.target
})

// map functionality
function App() {
  const graph = {
    nodes: nodes,
    edges: edges
  };

  // hierarchical layout chosen
  const options = {
    layout: {
      hierarchical: {
      enabled:true,
      levelSeparation: 2000,
      //nodeSpacing: 180,
      direction: "LR", //direction from left to right
      edgeMinimization: false,
      }
    },
    // forces applied
    physics: {
      enabled: true,
      hierarchicalRepulsion: {
          nodeDistance: 350,
         // avoidOverlap: 1
         // springLength: 100
      }
    },

    nodes: {
      font : {
            size : 100,
            color : 'black'
      },
      shape: "box",
      shapeProperties: {
        borderRadius: 12
      },
      margin: 50
    },

    edges: {
      color: {
        color: "#D3D3D3",
        highlight: "#797979",
        hover: "#797979",
        opacity: 1.0
      },
      smooth: {
        type: "continuous",
        roundness: 0
        },
      arrows: {
        to: {
          scaleFactor: 5
        }
      },
    },


    groups: {
      "0": {
        color: '#DCFCFA',
      },
     "1": {
        color: '#DCFCFA',
      },
      "2": {
        color: '#DCFCFA',
      },
      "3": {
        color: '#DCFCFA',
      },
    },

    height: "600px",

    // Interaction module enables "hover", "select", "zoom" and "drag" options
    interaction: {
      hover: true,
      hoverConnectedEdges: true,
      selectable: true,
      selectConnectedEdges: true,
      zoomView: true,
      dragView: true
    }
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };

  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this propert
        network.on("hoverNode", function(){
          // functionality for popup to show on mouseover
          (console.log("make all other nodes invisible"))
        });
      }}
    />
  );
}

export default App;
