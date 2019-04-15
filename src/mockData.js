let data = [
  {
    id: "DBS0238532",
    descriptor: "γS13",
    summary: "Radiation-sensitive mutant.",
    in_stock: "true",
  },
  {
    id: "DBS0238534",
    descriptor: "γS14",
    summary: "Radiation-sensitive mutant.",
    in_stock: "true",
  },
  {
    id: "DBS0350139",
    descriptor: "abcA5-",
    summary: "abcA5 insertional mutant expressed in AX4 cells",
    in_stock: "true",
  },
  {
    id: "DBS0235557",
    descriptor: "tipD-",
    summary: "tipD REMI mutant",
    in_stock: "false",
  },
  {
    id: "DBS0237027",
    descriptor: "ufc1-",
    summary:
      "ufc1 null mutant; ubiquitin-like (UBL) post-translational modifier. Total aa/point of insertion: 164/134.",
    in_stock: "true",
  },
]

for (let i = 0; i < 1000; i++) {
  data.push(data[i])
}

export default data
