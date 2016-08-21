import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';

import { Drink } from '../../models/drink';
import { Material } from '../../models/material';

import { Router, ActivatedRoute } from '@angular/router';

import { Utils } from '../../common/utils';

import { FormContainerComponent } from '../common/formContainer.component.ts';
import { DrinkServices } from '../../services/drinkService';
import { MaterialServices } from '../../services/materialService';

import { Unit } from '../../common/commonEnum';

@Component({
    selector: 'material-add-edit'
    , templateUrl: 'app/templates/material/form/materialAdd_Edit.template.html'
})

export class MaterialAddEditComponent implements OnInit {
    material: Material = new Material();
    sub: any;
    id: number;
    errorMessage: string;
    unitType = Utils.bindEnum(Unit);
    params: any;

    getMaterial = this._getMaterial;
    addMaterial = this._addMaterial;
    editMaterial = this._editMaterial;
    deleteMaterial = this._deleteMaterial;
    goBack = this._goBack;
    getParams = this._getParams;

    constructor(
        private drinkServices: DrinkServices
        , private materialServices: MaterialServices
        , private router: Router
        , private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.getParams();
        if (this.id) {
            this.getMaterial(this.id);
        }
    }

    onSubmit() {
        if (this.id) {
            this._editMaterial(this.material);
        }
        else {
            this._addMaterial(this.material);
        }
    }

    _getParams() {
        this.sub = this.route
            .params.subscribe(
            params => {
                this.id = params['id']
            }
            )
    }

    _getMaterial(id: number) {
        this.materialServices.getMaterial(id)
            .subscribe(
            material => this.material = material
            , error => this.errorMessage = error
            )
    }

    _addMaterial(material: Material) {
        this.materialServices.addMaterial(material)
            .subscribe(
            material => {
                this.router.navigate(['/materials']);
            }
            , error => this.errorMessage = error
            )
    }

    _editMaterial(material: Material) {
        this.materialServices.editMaterial(material)
            .subscribe(
            material => {
                this.router.navigate(['/materials', material.id]);
            }
            , error => this.errorMessage = error);
    }

    _deleteMaterial(id: number) {
        this.materialServices.deleteMaterial(id)
            .subscribe(
            material => {
                this.router.navigate(['/materials']);
            }
            , error => this.errorMessage = error)
    }

    _goBack() {
        Utils.goBack();
    }
}