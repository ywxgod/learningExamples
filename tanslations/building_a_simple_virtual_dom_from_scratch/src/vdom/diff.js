import render from './render';

const diffAttrs = (oldAttrs, newAttrs) => {
    const patches = []; // patch函数的数组
    // 将新的属性设置进去
    for(const [k, v] of Object.entries(newAttrs)){
        patches.push($node => {
            $node.setAttribute(k, v);
            return $node;
        });
    }
    // 删除不存在于新属性集而存在于旧属性集的属性
    for(const k in oldAttrs){
        if(!(k in newAttrs)){
            patches.push($node => {
                $node.removeAttribute(k);
                return $node;
            });
        }
    }

    return $node => {
        for(const patch of patches){
            patch($node);
        }
        return $node;
    }

};

const diffChildren = (oldVChildren, newVChildren) => {
    const childrenPatches = [];
    // 1. 当oldVChildren.length === newVChildren.length
    // 2. 当oldVChildren.length > newVChildren.length
    // 3. 当oldVChildren.length < newVChildren.length
    oldVChildren.forEach((oldVChild, i)=>{
        childrenPatches.push(diff(oldVChild, newVChildren[i]));
    });

    // 上面的执行完毕后，只有第三种情况中newVChildren中的部分节点没有处理到
    // 处理余下的节点
    const additionalPatches = [];
    for(const additionalVChild of newVChildren.slice(oldVChildren.length)){
        additionalPatches.push($node => {
            $node.appendChild(render(additionalVChild));
            return $node;
        });
    }

    return $parent => {
        $parent.childNodes.forEach(($child, i)=>{
            childrenPatches[i]&&childrenPatches[i]($child);
        });
        for(const patch of additionalPatches){
            patch($parent);
        }
        return $parent;
    }
};

const diff = (oldVTree, newVTree) => {

    // 如果新的虚拟dom是undefined
    if(newVTree === undefined){
        // 返回patch函数，$node为传入的旧的真实DOM元素
        return $node => {
            // 删除旧的元素
            $node.remove();
            // patch函数必须返回一个根元素，这种情况没有元素，所以返回undefined。
            return undefined;
        };
    }

    // 如果两者都是文本节点
    if(typeof oldVTree === 'string' || typeof newVTree === 'string'){
        // 文本内容不等
        if(oldVTree !== newVTree){
            return $node => {
                // 通过新的虚拟DOM渲染得到新的真实DOM
                const $newNode = render(newVTree);
                // 将新的DOM替换旧的
                $node.replaceWith($newNode);
                return $node;
            }
        }else{ 
            // 文本相等，无需处理。
            return $node => $node
        }
    }

    // 如果两者的tagName不同
    if(oldVTree.tagName !== newVTree.tagName){
        return $node => {
            // 通过新的虚拟DOM渲染得到新的真实DOM
            const $newNode = render(newVTree);
            // 将新的DOM替换旧的
            $node.replaceWith($newNode);
            return $node;
        }
    }

    const patchAttrs = diffAttrs(oldVTree.attrs, newVTree.attrs);
    const patchChidlren = diffChildren(oldVTree.children, newVTree.children);

    return $node => {
        patchAttrs($node);
        patchChidlren($node);
        return $node;
    };

};

export default diff;