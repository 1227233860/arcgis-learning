import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { loadModules, loadCss, loadScript } from 'esri-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('container') container: ElementRef;
  constructor(@Inject('ArcgisConfig') private arcgis: any) { }
  async ngOnInit(): Promise<void> {
    /** 懒加载样式文件及脚本，也可在index.html直接配置 */
    loadCss(this.arcgis.css);
    loadScript({
      url: this.arcgis.js
    });
    /** 懒加载样式文件及脚本，也可在index.html直接配置 */
    const [
      Map,
      MapView
    ] = await loadModules<[
      __esri.MapConstructor,
      __esri.MapViewConstructor
    ]>([
      'esri/Map',
      'esri/views/MapView'
    ]);
    /** 创建地图 */
    const map = new Map({
      basemap: 'streets'
    });
    /** 创建地图视图，渲染到dom */
    const mapView = new MapView({
      map,
      center: [0, 0],
      container: this.container.nativeElement
    });
    /** 非必须代码，可检测地图是否创建完毕 */
    mapView.when(() => {
      console.log('地图实例创建完毕');
    });
  }
}
