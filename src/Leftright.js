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
      levelSeparation: 500,
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
            size : 26,
            color : 'black'
      },
      shape: "box",
      shapeProperties: {
        borderRadius: 12
      }
    },

    edges: {
      color: {
        color: "#D3D3D3",
        highlight: "#797979",
        hover: "#797979",
        opacity: 1.0
      },
      smooth: {
        type: "curvedCW",
        roundness: 0.3,
        },
      arrows: {
        to: {
          scaleFactor: 2
        }
      },
    },

    groups: {
      "0": {
        color: '#6FFFF3',
      },
     "1": {
        color: '#6FFFC2',
      },
      "2": {
        color: '#F3FF15',
      },
      "3": {
        color: '#E17319',
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

      }}
    />
  );
}

export default App;
