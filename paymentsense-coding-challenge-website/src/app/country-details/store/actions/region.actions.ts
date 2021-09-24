import { Action } from '@ngrx/store';
import { Region } from '../../models/region.model';

export enum RegionActionTypes {
    GET_REGIONS = '[REGION] Get Regions',
    GET_REGIONS_SUCCESS = '[REGION] Get Regions Success',
    GET_REGIONS_FAIL = '[REGION] Get Regions Fail',
}

/*
** Get ToDos
**/
export class GetRegionsAction implements Action {
    readonly type = RegionActionTypes.GET_REGIONS;
}

export class GetRegionsSuccessAction implements Action {
    readonly type = RegionActionTypes.GET_REGIONS_SUCCESS;
    constructor(public payload: Region[]){}
}

export class GetRegionsFailAction implements Action {
    readonly type = RegionActionTypes.GET_REGIONS_FAIL;
    constructor(public payload: any) {}
}
 
  

export type RegionAction = 
    GetRegionsAction |
    GetRegionsSuccessAction |
    GetRegionsFailAction;