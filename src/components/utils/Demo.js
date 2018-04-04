export default {
  Demo: [
    {
      item: "...",
      title: "...",
      methods: [{ shortDesc: "..." }]
    },
    {
      item: "add item or other arrays",
      title: "I need to add",
      methods: [
        {
          shortDesc:"..."
        },
        {
          name: "splice",
          shortDesc: "element/s to an array",
          desc: "Adds and/or removes elements from an array.",
          example: `arr.splice(2, 0, 'tacos');<br>
          console.log(arr);`,
          output: `[5, 1, 'tacos', 8]`
        },
        {
          name: "push",
          shortDesc: "elements to the end of an array",
          desc:
            "Adds one or more elements to the end of an array and returns the new length of the array.",
          example: `arr.push(2);<br>
        console.log(arr);`,
          output: "[5, 1, 8, 2]"
        },
        {
          name: "unshift",
          shortDesc: "elements to the front of an array",
          desc:
            "Adds one or more elements to the front of an array and returns the new length of the array.",
          example: `arr.unshift(2, 7);<br>
          console.log(arr);`,
          output: "[2, 7, 5, 1, 8]"
        },
        {
          name: "concat",
          shortDesc: "this array to other array(s) and/or value(s)",
          desc:
            "Returns a new array comprised of this array joined with other array(s) and/or value(s).",
          example: `let arr2 = ['a', 'b', 'c'];<br>
          let arr3 = arr.concat(arr2);<br>
          console.log(arr3);`,
          output: `[5, 1, 8, 'a', 'b', 'c']`
        }
      ]
    },
    {
      item: "remove items",
      title: "I need to remove",
      methods: [
        {
          shortDesc:"..."
        },
        {
          name: "splice",
          shortDesc: "element/s from an array",
          desc: "Adds and/or removes elements from an array.",
          example: `arr.splice(2, 1);<br>
          console.log(arr);`,
          output: `[5, 1]`
        },
        {
          name: "pop",
          shortDesc: "the last element of the array",
          desc:
            "Removes the last element from an array and returns that element.",
          example: `arr.pop();<br>
          console.log(arr);`,
          output: `[5, 1]`
        },
        {
          name: "shift",
          shortDesc: "the first element of the array",
          desc:
            "Removes the first element from an array and returns that element.",
          example: `arr.shift();<br>
          console.log(arr);`,
          output: `[1, 8]`
        },
        {
          name: "slice",
          shortDesc:
            "one or more elements in order for use, leaving the array as is",
          desc:
            "The <code>slice()</code> method returns a shallow copy of a portion of an array into a new array object. You can specify either just the beginning element (where end will default to the arrays length) or both the beginning and the end, comma-separated. The original array will not be modified.",
          example: `let slicedArr = arr.slice(1);<br>
          console.log(arr);<br>
          console.log(slicedArr);`,
          output: `[5, 1, 8]<br>
          [1, 8]`
        }
      ]
    }
  ]
};
