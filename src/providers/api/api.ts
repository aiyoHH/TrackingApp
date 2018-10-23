import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { catchError,tap } from "rxjs/operators";
import { PlantingList,AccountExample,PlotsInfo,OpeInfo } from "../../app/dataModel";
import { BaseBean } from '../../app/bean/baseBean';
import { PlotsBean } from "../../app/bean/plotsBean";
import { OpeBean } from "../../app/bean/opeBean";


@Injectable()
export class ApiProvider {

  baseUrl:string='https://entroyi.tracking/api/v1';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  private log(message: string) {
    console.log(message);
  }

  // 获取首页数据
   getHomeData():Observable<BaseBean[]>{
    this.log("getHomeData")
    //测试开发数据
    return  Observable.of(PlantingList);

    //  真实开发环境http请求
    //  return this.http.get<BaseBean[]>(this.baseUrl).pipe(
    //    tap(_=>this.log("getHomeData")),
    //    catchError(this.handleError('getHomeData',[]))
    //  )
   }

   getPlotsData():Observable<PlotsBean>{
    this.log("getPlotsData")
    return Observable.of(PlotsInfo);
   }


   getOperataionData():Observable<OpeBean>{
    this.log("getOperataionData")
    return Observable.of(OpeInfo)
   }





/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return Observable.of(result as T);
    };
  }

}
