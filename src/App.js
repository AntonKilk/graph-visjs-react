import React from 'react'
import Graph from "react-graph-vis";
import data from './courses'
//import "./styles.css";
// need to import the vis network css in order to show tooltip
//import "./network.css";

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

function App() {
  const graph = {
    nodes: nodes,
    edges: edges
  };

  const options = {
    layout: {
      hierarchical: {
      enabled:true,
      levelSeparation: 300,
      //nodeSpacing: 180,
      direction: "UD",
      edgeMinimization: false,
      // parentCentralization: false,
      }
    },
    physics: {
      enabled: true,
      hierarchicalRepulsion: {
          nodeDistance: 200,
         // avoidOverlap: 1
         // springLength: 100
      }
    },

    nodes: {
      font : {
            size : 16,
            color : 'black'
      },
    },
    edges: {
      color: "green",
      smooth: {
        type: "curvedCCW",
        roundness: 0.3
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
