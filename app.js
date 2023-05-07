function clickElementByXPath(xpath) {
    var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
        element.click();
        return true;
    } else {
        return false;
    }
}

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyA') {
        clickElementByXPath('//*[@id="search"]/button');
    }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyS') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div[2]/div/div/div[1]/div[1]');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyD') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div/div[2]/div[1]');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyF') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div[2]/div/div/div[3]/div[1]');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyG') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div[2]/div/div/div[4]/div[1]');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyH') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div[2]/div/div/div[5]/div[1]');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyJ') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div[2]/div/div/div[6]/div[1]');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyK') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div[2]/div/div/div[7]/div[1]');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyL') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div[2]/div/div/div[8]/div[1]');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyZ') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div[2]/div/div/div[9]/div[1]');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyX') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div[2]/div/div/div[10]/div[1]');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyQ') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div/div[2]/div/div[8]/div/div[1]/div[1]/pjsdiv/pjsdiv[6]/pjsdiv[1]/pjsdiv');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyW') {
    clickElementByXPath('/html/body/div[1]/div/div[4]/div/div[2]/div/div[8]/div/div[1]/div[1]/pjsdiv/pjsdiv[17]/pjsdiv[4]');
  }
});
