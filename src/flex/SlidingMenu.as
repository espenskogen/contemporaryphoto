package {
import mx.collections.IList;

import spark.components.List;
import spark.components.SkinnableContainer;

public class SlidingMenu extends SkinnableContainer {

    public function SlidingMenu() {
        super();
    }

    private var _dataprovider:IList;

    [SkinPart]
    public var menu:List;

    public function set dataProvider(value:IList):void {
        _dataprovider =value;
    }



}
}