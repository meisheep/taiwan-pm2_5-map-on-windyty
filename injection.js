// L is leaflet.js
// W is main module of Windyty
{
  const script = document.createElement('script');
  script.textContent = `
    {
      const createIndexIcon = function(idx) {
        const markerColor = function(idx) {
          let color = '#9CFF9C';
          if (idx > 70) {
            color = '#CE30FF';
          } else if (idx > 64) {
            color = '#990000';
          } else if (idx > 58) {
            color = '#FF0000';
          } else if (idx > 53) {
            color = '#FF6464';
          } else if (idx > 47) {
            color = '#FF9A00';
          } else if (idx > 41) {
            color = '#FFCF00';
          } else if (idx > 35) {
            color = '#FFFF00';
          } else if (idx > 23) {
            color = '#31CF00'
          } else if (idx > 11) {
            color = '#31FF00'
          }

          return color;
        };

        const idxNum = parseInt(idx);
        return L.divIcon({
          html: \`
            <div style="
                text-align: center;
                font-weight: bold;
                line-height: 2em;
                font-size: 1.5em;
                width: 2em;
                height: 2em;
                border-radius: 50%;
                background-color: \${markerColor(idxNum)};
                opacity: .75;
                border: 1px solid #333;
              ">
              \${idxNum}
            </div>
          \`
        });
      };
      const AIRBOX_DATA = ${JSON.stringify(AIRBOX_DATA)};
      AIRBOX_DATA.forEach((item) => {
        L.marker(item.LatLng, {
            icon: createIndexIcon(item.Data.Dust2_5)
          })
          .addTo(W.maps);
      });
    }
  `;
  document.body.appendChild(script);
}
