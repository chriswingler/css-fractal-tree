document.body.style.transform = `rotate(${180}deg)`;

const Line = (i, parentLine, transform) => {
  if (i === 0) {
    parentLine = document.createElement("div");
    parentLine.className = "line";
    document.body.appendChild(parentLine);
  }

  if (i === 15) {
    return;
  }

  const { style } = parentLine;

  style.backgroundColor = `#${65 - (i + 10)}4321`;
  style.height = `${30 / i}vh`;
  style.width = `${2 / i}vw`;
  if (!transform) {
    style.transform = `rotate(${i && i + 20}deg)`;
  }
  style.transform = `rotate(${i && i + 200}deg)`;
  style.position = "relative";
  style.top = `${15 / i}vh`;

  const newLine = document.createElement("div");
  newLine.className = "line";

  parentLine.appendChild(newLine);

  Line(i + 1, newLine);

  newLine.style.transform = `rotate(${i && i + 200}deg)`;

  Line(i + 1, newLine);
};

Line(0);
