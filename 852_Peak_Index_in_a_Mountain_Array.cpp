// through Binary search but getting TLE.
class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
        int n = arr.size();
        int start=0;
        int end=n-1;
        int mid= start+(end-start)/2;
        int peak=0;
        while (true){
            // if ()
            if(arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]){
                return mid;
            }
        }

    }
};