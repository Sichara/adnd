import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ITreeOptions, TreeNode } from 'angular-tree-component';
import { get } from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TableOfContentsComponent implements OnChanges {
  @Input() nodes: any;
  @Input() withSelect: boolean;

  @Output() contentsClick: EventEmitter<string> = new EventEmitter();
  @Output() selectItem: EventEmitter<any> = new EventEmitter();

  treeOptions: ITreeOptions = {
    allowDrag: true
  };

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (get(changes, ['nodes', 'currentValue'])) {
      const currentNodes: any = get(changes, ['nodes', 'currentValue']);

      if (!get(currentNodes, ['children', 'length'])) {
        delete currentNodes.children;
      }
    }
  }

  onClick(url: string): void {
    this.contentsClick.emit(url);
  }

  onSelect($event: Event, selectedItem: any, node: TreeNode): void {
    const elem: HTMLInputElement = <HTMLInputElement>$event.target;
    console.log(node);

    this.selectItem.emit({
      ...selectedItem,
      selected: elem.checked,
      parent: node.isLeaf ? node.parent.data : undefined});
  }
}
