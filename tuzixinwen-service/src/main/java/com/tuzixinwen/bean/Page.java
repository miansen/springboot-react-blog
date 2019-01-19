package com.tuzixinwen.bean;

import java.util.List;

/**
 * 分页实体
 * @Author: miansen
 * @Date: 2018/11/18 14:50
 */
public class Page<T> {

    private Integer number; //当前是第几页
    private Integer size; //每页返回多少条数据
    private Integer totalPages; //一共有多少页
    private Integer totalCount; //一共有多少条数据
    private List<T> content; //数据实体
    private Boolean first; //是否第一页
    private Boolean last; //是否最后一页

    public Page(Integer number, Integer size, Integer totalCount, List<T> data) {
        this.number = number;
        this.size = size;
        this.totalCount = totalCount;
        this.content = data;
        this.totalPages = totalCount % size == 0 ? totalCount / size : (totalCount / size) + 1;
        this.first = number == 1;
        this.last = number.equals(this.totalPages) || number > this.totalPages;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
    }

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }

    public List<T> getContent() {
        return content;
    }

    public void setContent(List<T> content) {
        this.content = content;
    }

    public Boolean getFirst() {
        return first;
    }

    public void setFirst(Boolean first) {
        this.first = first;
    }

    public Boolean getLast() {
        return last;
    }

    public void setLast(Boolean last) {
        this.last = last;
    }
}
